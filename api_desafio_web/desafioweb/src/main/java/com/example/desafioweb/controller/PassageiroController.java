package com.example.desafioweb.controller;

import com.example.desafioweb.dominio.Passageiro;
import com.example.desafioweb.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/passageiros")
public class PassageiroController {

    @Autowired
    private PassageiroRepository repository;

    @PostMapping
    public ResponseEntity postPassageiro(@RequestBody Passageiro novoPassageiro) {
        repository.save(novoPassageiro);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getPassageiro() {
        List<Passageiro> passageiros = repository.findAll();
        if (passageiros.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(passageiros);
        }
    }

}
