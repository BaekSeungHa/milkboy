package spring.project.milkboy.domain.user.domain;

import com.sun.istack.NotNull;
import lombok.*;
import spring.project.milkboy.domain.user.dto.req.SignInDto;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "user")
public class User {

    @Id
    private String id;

    @NotNull
    private String name;

    @NotNull
    private String pw;

    @NotNull
    private String info;

    @NotNull
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    public User(SignInDto userDto) {
        this.id = userDto.getId();
        this.name = userDto.getName();
        this.pw = userDto.getPw();
        this.info = userDto.getInfo();
        this.userRole = UserRole.STUDENT;
    }
}
