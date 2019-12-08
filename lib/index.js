const { declare } = require("@babel/helper-plugin-utils");
const { types: t } = require("@babel/core");

module.exports = declare(api => {
  //   api.assertVersion(7);

  return {
    name: "operators-chaining",
    visitor: {
      /**
       *
       * @param {{node: babel.types.BinaryExpression}} path
       * @param {*} state
       */
      BinaryExpression(path, state) {
        const allowedOps = ["===", "<", "<=", ">", ">="];
        if (
          t.isBinaryExpression(path.node.left) &&
          allowedOps.includes(path.node.left.operator)
        ) {
          path.replaceWith(
            t.logicalExpression(
              "&&",
              path.node.left,
              t.binaryExpression(
                path.node.operator,
                path.node.left.right,
                path.node.right
              )
            )
          );
        } else if (
          t.isBinaryExpression(path.node.right) &&
          allowedOps.includes(path.node.right.operator)
        ) {
          path.replaceWith(
            t.logicalExpression(
              "&&",
              t.binaryExpression(
                path.node.operator,
                path.node.left,
                path.node.right.left
              ),
              path.node.right
            )
          );
        }
      }
    }
  };
});
