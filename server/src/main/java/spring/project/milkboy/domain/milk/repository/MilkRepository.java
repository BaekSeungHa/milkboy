package spring.project.milkboy.domain.milk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spring.project.milkboy.domain.milk.domain.Milk;

import java.time.LocalDate;

@Repository
public interface MilkRepository extends JpaRepository<Milk, Long> {

    boolean existsByApplyDateAndUser_Id(LocalDate localDate, String userId);
}
