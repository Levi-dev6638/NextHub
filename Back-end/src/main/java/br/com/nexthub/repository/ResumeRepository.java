package br.com.nexthub.repository;

import br.com.nexthub.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface ResumeRepository extends JpaRepository<Resume, UUID> {
    Optional<Resume> findByStudentId(String studentId);
}
