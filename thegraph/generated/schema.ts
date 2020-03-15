// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Ticker extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ticker entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ticker entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ticker", id.toString(), this);
  }

  static load(id: string): Ticker | null {
    return store.get("Ticker", id) as Ticker | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get margin(): BigInt {
    let value = this.get("margin");
    return value.toBigInt();
  }

  set margin(value: BigInt) {
    this.set("margin", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get params(): Array<BigInt> {
    let value = this.get("params");
    return value.toBigIntArray();
  }

  set params(value: Array<BigInt>) {
    this.set("params", Value.fromBigIntArray(value));
  }

  get oracleId(): string {
    let value = this.get("oracleId");
    return value.toString();
  }

  set oracleId(value: string) {
    this.set("oracleId", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get syntheticId(): string {
    let value = this.get("syntheticId");
    return value.toString();
  }

  set syntheticId(value: string) {
    this.set("syntheticId", Value.fromString(value));
  }

  get longTokenId(): string {
    let value = this.get("longTokenId");
    return value.toString();
  }

  set longTokenId(value: string) {
    this.set("longTokenId", Value.fromString(value));
  }

  get shortTokenId(): string {
    let value = this.get("shortTokenId");
    return value.toString();
  }

  set shortTokenId(value: string) {
    this.set("shortTokenId", Value.fromString(value));
  }

  get tokenIds(): Array<string> {
    let value = this.get("tokenIds");
    return value.toStringArray();
  }

  set tokenIds(value: Array<string>) {
    this.set("tokenIds", Value.fromStringArray(value));
  }
}

export class TokenId extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenId entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenId entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenId", id.toString(), this);
  }

  static load(id: string): TokenId | null {
    return store.get("TokenId", id) as TokenId | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ticker(): string {
    let value = this.get("ticker");
    return value.toString();
  }

  set ticker(value: string) {
    this.set("ticker", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Position entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Position entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Position", id.toString(), this);
  }

  static load(id: string): Position | null {
    return store.get("Position", id) as Position | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get positions(): Array<string> {
    let value = this.get("positions");
    return value.toStringArray();
  }

  set positions(value: Array<string>) {
    this.set("positions", Value.fromStringArray(value));
  }
}
