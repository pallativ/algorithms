package trees.top_view;

import org.junit.Assert;
import org.junit.Test;
import trees.common.TreeNode;

import static junit.framework.TestCase.assertEquals;

public class Tests {

    public static TreeNode CreateTree() {
        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(5);
        root.right.right.left = new TreeNode(3);
        root.right.right.right = new TreeNode(6);
        root.right.right.left.right = new TreeNode(4);
        return root;
    }

    @Test
    public void BreadthFirstTest(){
        TreeNode node = CreateTree();
        assertEquals("[1, 2, 5, 3, 6, 4]",node.BreadthFirstTraversal());
    }

    @Test
    public void TopView(){
        TreeNode node = CreateTree();
        var topView = new TopView();
        assertEquals("[1, 2, 5, 6]", topView.topView(node));
    }
}
