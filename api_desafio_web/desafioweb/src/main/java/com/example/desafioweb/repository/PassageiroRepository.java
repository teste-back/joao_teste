package com.example.desafioweb.repository;

import com.example.desafioweb.dominio.Passageiro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassageiroRepository extends JpaRepository<Passageiro, Integer> {
}