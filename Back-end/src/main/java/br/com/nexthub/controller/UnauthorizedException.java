package br.com.nexthub.controller;

public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException() { super("Faça login para continuar."); }
    public UnauthorizedException(String message) { super(message); }
}
