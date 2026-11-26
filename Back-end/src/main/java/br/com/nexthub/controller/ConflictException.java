package br.com.nexthub.controller;

public class ConflictException extends RuntimeException {
    public ConflictException(String message) { super(message); }
}
