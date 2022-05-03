package com.example.desafioweb.controller;

import com.example.desafioweb.dominio.Corrida;
import com.example.desafioweb.dominio.Motorista;
import com.example.desafioweb.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Configuration
@RequestMapping("/corridas")
public class CorridaController {

    @Autowired
    CorridaRepository repository;

    @PostMapping
    public ResponseEntity postCorrida(@RequestBody Corrida novaCorrida) {
        repository.save(novaCorrida);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity getCorridas() {
        List<Corrida> corridas = repository.findAll();
        if (corridas.isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(corridas);
        }
    }

}
