package com.example.desafioweb.repository;

import com.example.desafioweb.dominio.Motorista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotoristaRepository extends JpaRepository<Motorista, Integer> {
}