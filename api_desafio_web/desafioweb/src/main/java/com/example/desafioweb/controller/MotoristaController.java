package com.example.desafioweb.controller;

import com.example.desafioweb.dominio.Motorista;
import com.example.desafioweb.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/motoristas")
public class MotoristaController {
    @Autowired
    private MotoristaRepository repository;

    @PostMapping
    public ResponseEntity postMotorista(@RequestBody Motorista novoMotorista) {
        repository.save(novoMotorista);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getMotoristas() {
        List<Motorista> motoristas = repository.findAll();
        if (motoristas.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(motoristas);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity putMotorista(@PathVariable int id) {
        if(repository.existsById(id)) {
            Motorista motorista = repository.getById(id);
            if (motorista.getStatus()) {
                motorista.setStatus(false);
            } else {
                motorista.setStatus(true);
            }
            repository.save(motorista);
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

}
