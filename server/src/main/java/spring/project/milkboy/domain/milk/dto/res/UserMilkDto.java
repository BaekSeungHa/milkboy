package spring.project.milkboy.domain.milk.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import spring.project.milkboy.domain.user.domain.User;

@Getter
@Builder
@AllArgsConstructor
public class UserMilkDto {

    private User user;
    private boolean drinks;
}
