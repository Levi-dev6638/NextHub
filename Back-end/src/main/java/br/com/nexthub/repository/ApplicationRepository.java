package br.com.nexthub.repository;

import br.com.nexthub.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<Application, String> {
    Optional<Application> findByStudentIdAndOpportunityId(String studentId, String opportunityId);
    List<Application> findByStudentIdOrderByCreatedAtDesc(String studentId);
    List<Application> findByOpportunityOwnerIdOrderByCreatedAtDesc(String ownerId);
}
