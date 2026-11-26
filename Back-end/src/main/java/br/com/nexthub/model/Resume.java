package br.com.nexthub.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "resumes")
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private java.util.UUID id;
    @OneToOne(optional = false)
    @JoinColumn(name = "student_id", unique = true)
    private User student;
    private String originalName;
    private String mimeType;
    private String storagePath;
    private Instant uploadedAt = Instant.now();

    public java.util.UUID getId() { return id; }
    public void setId(java.util.UUID id) { this.id = id; }
    public User getStudent() { return student; }
    public void setStudent(User student) { this.student = student; }
    public String getOriginalName() { return originalName; }
    public void setOriginalName(String originalName) { this.originalName = originalName; }
    public String getMimeType() { return mimeType; }
    public void setMimeType(String mimeType) { this.mimeType = mimeType; }
    public String getStoragePath() { return storagePath; }
    public void setStoragePath(String storagePath) { this.storagePath = storagePath; }
    public Instant getUploadedAt() { return uploadedAt; }
    public void setUploadedAt(Instant uploadedAt) { this.uploadedAt = uploadedAt; }
}
