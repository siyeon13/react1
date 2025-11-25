import org.junit.jupiter.api.*;

public class JUnitCycleTest {

    // 테스트케이스들 실행하기 전에 실행됨, db나 mock(예시데이터)작업
    @BeforeAll
    static void beforeAll() {
        System.out.println("@BeforeAll");
    }

    @BeforeEach
    public void BeforeEach() {
        System.out.println("@BeforeEach");
    }


    @Test
    public void test1() {
        System.out.println("test1");
    }

    @Test
    public void test2() {
        System.out.println("test2");
    }

    @Test
    public void test3() {
        System.out.println("test3");
    }

    @AfterEach
    public void afterEach() {
        System.out.println("@AfterEach");
    }

    @AfterAll
    static void afterAll() {
        System.out.println("@AfterAll");
    }


}
