"use client";

import {
  useChangeDrankStatusMutation,
  useGetDrankMilkListQuery,
} from "@/query/milk/query";
import * as S from "./style";
import CheckBox from "../CheckBox";
import { useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const queryClient = useQueryClient();

  const changeDrankStatusMutation = useChangeDrankStatusMutation();

  const onChangeDrank = (id: string) => {
    if (!window.confirm("정말 우유를 마셨나요?")) {
      return;
    } else {
      changeDrankStatusMutation.mutate(id, {
        onSuccess: () => {
          window.alert("우유 마셔서 감사합니다 키 큽시다 ㅎㅇㅌ");
          queryClient.invalidateQueries([
            "milk/drankMilkList",
            hypenDate(new Date()),
          ]);
        },
      });
    }
  };
  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}년 ${month}월 ${day}일`;
  }

  function hypenDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const { data } = useGetDrankMilkListQuery(hypenDate(currentDate));

  return (
    <S.Container>
      <S.Title>2학년 1반의 {formattedDate} 우유 확인</S.Title>
      <S.Table>
        <thead>
          <tr>
            <S.TH>이름</S.TH>
            <S.TH>마신 여부</S.TH>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((data) => (
            <tr key={data.user.id}>
              <S.TD>{data.user.name}</S.TD>
              <S.TD>
                <S.CheckBoxWrapper>
                  <CheckBox
                    onChange={() => onChangeDrank(data.user.id)}
                    checked={data.drinks === true ? true : false}
                  />
                </S.CheckBoxWrapper>
              </S.TD>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};

export default Home;
