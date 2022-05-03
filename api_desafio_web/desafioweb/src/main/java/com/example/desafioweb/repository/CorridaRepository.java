package com.example.desafioweb.repository;

import com.example.desafioweb.dominio.Corrida;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CorridaRepository extends JpaRepository<Corrida, Integer> {
}