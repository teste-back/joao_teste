package com.example.desafioweb.dominio;

import javax.persistence.*;

@Entity
@Table(name = "corrida")
public class Corrida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_corrida", nullable = false)
    private Integer id;

    @Basic(fetch = FetchType.LAZY)
    @Column(name = "fk_passageiro")
    private Integer fkPassageiro;

    @Basic(fetch = FetchType.LAZY)
    @Column(name = "fk_motorista")
    private Integer fkMotorista;

    @Lob
    @Column(name = "valor_corrida")
    private String valorCorrida;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFkPassageiro() {
        return fkPassageiro;
    }

    public void setFkPassageiro(Integer fkPassageiro) {
        this.fkPassageiro = fkPassageiro;
    }

    public Integer getFkMotorista() {
        return fkMotorista;
    }

    public void setFkMotorista(Integer fkMotorista) {
        this.fkMotorista = fkMotorista;
    }

    public String getValorCorrida() {
        return valorCorrida;
    }

    public void setValorCorrida(String valorCorrida) {
        this.valorCorrida = valorCorrida;
    }

}