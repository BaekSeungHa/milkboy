package spring.project.milkboy.domain.milk.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.project.milkboy.domain.milk.domain.Milk;
import spring.project.milkboy.domain.milk.dto.res.UserMilkDto;
import spring.project.milkboy.domain.milk.repository.MilkRepository;
import spring.project.milkboy.domain.user.domain.User;
import spring.project.milkboy.domain.user.domain.UserRole;
import spring.project.milkboy.domain.user.repository.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MilkService {

    private final MilkRepository milkRepository;
    private final UserRepository userRepository;

    @Transactional
    public void drink(String id) {
        milkRepository.save(new Milk(userRepository.findById(id).get()));
    }

    public List<UserMilkDto> getUserList(LocalDate date) {

        List<User> users = userRepository.findAllByUserRole(UserRole.STUDENT);

        return users.stream().map(user -> checkMilk(date, user)).collect(Collectors.toList());
    }

    private UserMilkDto checkMilk(LocalDate date, User user) {

        if (milkRepository.existsByApplyDateAndUser_Id(date, user.getId()))
            return UserMilkDto.builder()
                    .user(user)
                    .drinks(true).build();
        else {
            return UserMilkDto.builder()
                    .user(user)
                    .drinks(false).build();
        }
    }
}