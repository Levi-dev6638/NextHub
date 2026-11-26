package br.com.nexthub.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User {
    @Id
    private String id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String role;
    private Instant createdAt = Instant.now();

    private String phone;
    private String institution;
    private String education;
    @Column(length = 1000)
    private String interests;
    private String format;
    private String availability;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    public String getEducation() { return education; }
    public void setEducation(String education) { this.education = education; }
    public String getInterests() { return interests; }
    public void setInterests(String interests) { this.interests = interests; }
    public String getFormat() { return format; }
    public void setFormat(String format) { this.format = format; }
    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }
}
