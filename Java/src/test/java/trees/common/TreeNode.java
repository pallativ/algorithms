package trees.common;

import com.sun.source.tree.Tree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;
import java.util.Queue;
import java.util.stream.Collectors;

public class TreeNode {
    public int data;
    public TreeNode left;
    public TreeNode right;

    public TreeNode(int data) {
        this.data = data;
    }

    public TreeNode(int data, TreeNode left, TreeNode right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    public String BreadthFirstTraversal() {
        var array = new ArrayList<TreeNode>();
        array.add(this);
        var result = new ArrayList<Integer>();
        while (!array.isEmpty()) {
            var currNode = array.get(0);
            array.remove(0);
            if (currNode.left != null) {
                array.add(currNode.left);
            }
            if (currNode.right != null) {
                array.add(currNode.right);
            }
            result.add(currNode.data);
        }
        return Arrays.toString(result.toArray());
        //return array.stream().map(Objects::toString).collect(Collectors.joining(", "));
    }
}