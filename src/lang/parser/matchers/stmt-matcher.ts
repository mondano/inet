import pt from "@cicada-lang/partech"
import { Stmt } from "../../stmt"
import * as Stmts from "../../stmts"

export function stmts_matcher(tree: pt.Tree): Array<Stmt> {
  return pt.matcher({
    "stmts:stmts": ({ stmts }) =>
      pt.matchers.zero_or_more_matcher(stmts).map(stmt_matcher),
  })(tree)
}

export function stmt_matcher(tree: pt.Tree): Stmt {
  return pt.matcher<Stmt>({
    // "stmt:let": ({ name, exp }, { span }) =>
    //   new Stmts.Let(pt.str(name), exp_matcher(exp), { span }),
  })(tree)
}