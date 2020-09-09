package dynamic_programming;

import org.junit.Test;

public class Tests {

    @Test
    public void BasicTest() {
        var s = new Solution();
        var result = s.coinChange(new int[]{1, 2, 5}, 11);
    }
}
