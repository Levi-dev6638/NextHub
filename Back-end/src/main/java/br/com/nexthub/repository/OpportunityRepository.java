package br.com.nexthub.repository;

import br.com.nexthub.model.Opportunity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OpportunityRepository extends JpaRepository<Opportunity, String> {
    List<Opportunity> findByActiveTrueOrderByCreatedAtDesc();
    List<Opportunity> findByOwnerIdAndActiveTrueOrderByCreatedAtDesc(String ownerId);
}
