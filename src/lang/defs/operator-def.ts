import { Def } from "../def"
import { Module } from "../module"
import { Node } from "../node"
import { Net } from "../net"

export class OperatorDef extends Def {
  constructor(public mod: Module, public execute: (net: Net) => void) {
    super()
  }
}