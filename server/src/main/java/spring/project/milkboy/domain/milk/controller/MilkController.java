package spring.project.milkboy.domain.milk.controller;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import spring.project.milkboy.domain.milk.dto.req.UserIdDto;
import spring.project.milkboy.domain.milk.dto.res.UserMilkDto;
import spring.project.milkboy.domain.milk.service.MilkService;
import spring.project.milkboy.global.response.Response;
import spring.project.milkboy.global.response.ResponseData;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/milk")
@RequiredArgsConstructor
public class MilkController {

    private final MilkService milkService;

    @PostMapping
    @Operation(summary = "drink milk", description = "우유 마셨다")
    public Response drink(@RequestBody UserIdDto userIdDto) {
        milkService.drink(userIdDto.getId());
        return Response.of(HttpStatus.OK, "우유 마시기 성공 ~~!!");
    }

    @GetMapping("/users")
    @Operation(summary = "load user list that drinks milk", description = "전체 학생 마신 여부 불러오기")
    public ResponseData<List<UserMilkDto>> getUserList(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date) {
        return ResponseData.of(HttpStatus.OK, "유유 마신 리스트 조회 성공", milkService.getUserList(date));
    }
}
