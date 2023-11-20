package spring.project.milkboy.domain.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import spring.project.milkboy.domain.user.domain.User;
import spring.project.milkboy.domain.user.dto.req.LoginDto;
import spring.project.milkboy.domain.user.dto.req.SignInDto;
import spring.project.milkboy.domain.user.repository.UserRepository;
import spring.project.milkboy.global.error.exception.InvalidPermissionException;
import spring.project.milkboy.global.error.exception.ResourceNotFoundException;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public void save(SignInDto dto) {
        Optional<User> byEmail = userRepository.findById(dto.getId());
        byEmail.orElseGet(() -> userRepository.save(new User(dto)));
    }

    public User login(LoginDto dto) {

        User user = Optional.of(userRepository.findById(dto.getId())).orElseThrow(ResourceNotFoundException::new).get();

        if(user.getPw().equals(dto.getPw())) return user;
        else throw InvalidPermissionException.EXCEPTION;
    }
}
