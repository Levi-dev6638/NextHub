package br.com.nexthub.repository;

import br.com.nexthub.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, java.util.UUID> {
    Optional<Favorite> findByStudentIdAndOpportunityId(String studentId, String opportunityId);
    List<Favorite> findByStudentId(String studentId);
}
