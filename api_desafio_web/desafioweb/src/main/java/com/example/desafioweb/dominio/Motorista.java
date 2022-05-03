package com.example.desafioweb.dominio;

import javax.persistence.*;

@Entity
@Table(name = "motorista")
public class Motorista {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_motorista", nullable = false)
    private Integer id;

    @Column(name = "cpf", length = 14)
    private String cpf;

    @Column(name = "nome", length = 50)
    private String nome;

    @Column(name = "data_nascimento", length = 10)
    private String dataNascimento;

    @Column(name = "modelo_carro", length = 30)
    private String modeloCarro;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "sexo")
    private Character sexo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getModeloCarro() {
        return modeloCarro;
    }

    public void setModeloCarro(String modeloCarro) {
        this.modeloCarro = modeloCarro;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Character getSexo() {
        return sexo;
    }

    public void setSexo(Character sexo) {
        this.sexo = sexo;
    }

}