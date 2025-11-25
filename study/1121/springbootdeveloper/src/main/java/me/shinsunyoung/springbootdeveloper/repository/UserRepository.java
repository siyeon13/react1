package me.shinsunyoung.springbootdeveloper.repository;

import me.shinsunyoung.springbootdeveloper.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    // select id, email 1개 가져오기
    // Optional<User> findByIdAndEmail(Long id, String email);

    // findByName 이름으로 데이터 가져오기
    // findByNicknameAndAge 닉네임과 나이로 데이터 가져오기

    // findByNameOrAge

    // findByAgeGreaterThan

    // findByNameIsNull
}
