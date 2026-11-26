package br.com.nexthub;

import br.com.nexthub.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@TestPropertySource(properties = {
        "spring.datasource.url=jdbc:sqlite:./target/test-nexthub.sqlite",
        "nexthub.upload-dir=./target/test-uploads"
})
class NextHubApplicationTests {
    @Autowired
    private UserRepository users;

    @Test
    void startsHibernateAndSeedsDemoUsers() {
        assertThat(users.count()).isGreaterThanOrEqualTo(1);
    }
}
