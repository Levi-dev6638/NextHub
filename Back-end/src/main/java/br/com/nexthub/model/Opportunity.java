package br.com.nexthub.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "opportunities")
public class Opportunity {
    @Id
    private String id;
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id")
    private User owner;
    private String title;
    private String type;
    @Column(length = 10000)
    private String description;
    private String company;
    private String area;
    private String subject;
    private String format;
    private String deadline;
    private String hours;
    private String location;
    private String link;
    @Column(length = 10000)
    private String requirements;
    @Column(length = 10000)
    private String responsibilities;
    private boolean internalApplication;
    private Instant createdAt = Instant.now();
    private boolean active = true;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public User getOwner() { return owner; }
    public void setOwner(User owner) { this.owner = owner; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public String getFormat() { return format; }
    public void setFormat(String format) { this.format = format; }
    public String getDeadline() { return deadline; }
    public void setDeadline(String deadline) { this.deadline = deadline; }
    public String getHours() { return hours; }
    public void setHours(String hours) { this.hours = hours; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
    public String getRequirements() { return requirements; }
    public void setRequirements(String requirements) { this.requirements = requirements; }
    public String getResponsibilities() { return responsibilities; }
    public void setResponsibilities(String responsibilities) { this.responsibilities = responsibilities; }
    public boolean isInternalApplication() { return internalApplication; }
    public void setInternalApplication(boolean internalApplication) { this.internalApplication = internalApplication; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }
}
