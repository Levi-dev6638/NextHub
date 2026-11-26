package br.com.nexthub.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "applications", uniqueConstraints = @UniqueConstraint(columnNames = {"student_id", "opportunity_id"}))
public class Application {
    @Id
    private String id;
    @ManyToOne(optional = false)
    @JoinColumn(name = "student_id")
    private User student;
    @ManyToOne(optional = false)
    @JoinColumn(name = "opportunity_id")
    private Opportunity opportunity;
    private String status = "Enviada";
    private Instant createdAt = Instant.now();
    private String resumePath;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public User getStudent() { return student; }
    public void setStudent(User student) { this.student = student; }
    public Opportunity getOpportunity() { return opportunity; }
    public void setOpportunity(Opportunity opportunity) { this.opportunity = opportunity; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public String getResumePath() { return resumePath; }
    public void setResumePath(String resumePath) { this.resumePath = resumePath; }
}
