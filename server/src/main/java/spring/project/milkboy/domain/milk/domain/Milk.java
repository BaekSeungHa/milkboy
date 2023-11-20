package spring.project.milkboy.domain.milk.domain;

import com.sun.istack.NotNull;
import lombok.*;
import spring.project.milkboy.domain.user.domain.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.ZonedDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "milk")
public class Milk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private LocalDate applyDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Milk(User user) {
        this.applyDate = ZonedDateTime.now().toLocalDate();
        this.user = user;
    }
}
