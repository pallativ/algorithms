package trees.top_view;


import com.sun.source.tree.Tree;
import trees.common.TreeNode;

import java.util.*;

public class TopView {

    public String topView(TreeNode root) {
        var queue = new LinkedList<QueueNode>();
        queue.add(new QueueNode(0, root));
        TreeMap<Integer, Integer> map = new TreeMap<>();
        while (!queue.isEmpty()) {
            var item = queue.poll();
            var node = item.node;
            var level = item.level;
            // Push items to Hash Map.
            if (!map.containsKey(level))
                map.put(level, node.data);

            if (node.left != null)
                queue.add(new QueueNode(level - 1, node.left));
            if (node.right != null)
                queue.add(new QueueNode(level + 1, node.right));
        }
        return Arrays.toString(map.values().toArray());
    }

    public class QueueNode {
        public int level;
        public TreeNode node;

        public QueueNode(int level, TreeNode node) {
            this.level = level;
            this.node = node;
        }
    }

}


