package spring.project.milkboy.domain.user.controller;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import spring.project.milkboy.domain.user.domain.User;
import spring.project.milkboy.domain.user.dto.req.LoginDto;
import spring.project.milkboy.domain.user.dto.req.SignInDto;
import spring.project.milkboy.domain.user.service.UserService;
import spring.project.milkboy.global.response.Response;
import spring.project.milkboy.global.response.ResponseData;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/join")
    @Operation(summary = "sign-in", description = "회원 가입")
    public Response join(@RequestBody SignInDto signInDto) {
        userService.save(signInDto);
        return Response.of(HttpStatus.OK, "회원 가입 성공");
    }

    @PostMapping("/login")
    @Operation(summary = "login and get user info", description = "로그인")
    public ResponseData<User> getUserInfo(@RequestBody LoginDto loginDto) {
        return ResponseData.of(HttpStatus.OK, "유저 정보 조회 성공", userService.login(loginDto));
    }
}
