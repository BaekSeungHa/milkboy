package spring.project.milkboy.domain.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.project.milkboy.domain.user.domain.User;
import spring.project.milkboy.domain.user.domain.UserRole;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    List<User> findAllByUserRole(UserRole userRole);
}
