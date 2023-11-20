package spring.project.milkboy.domain.user.dto.req;

import lombok.Getter;

@Getter
public class SignInDto {

    private String id;
    private String name;
    private String pw;
    private String info;
}
