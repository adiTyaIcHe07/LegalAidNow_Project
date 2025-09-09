package com.legalaidnow.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.TableGenerator;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Lawyer {

    @Id
    @TableGenerator(
            name = "lawyer_gen",
            table = "id_gen",
            pkColumnName = "gen_name",
            valueColumnName = "gen_val",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.TABLE,
            generator = "lawyer_gen"
    )
    private Long id;

    private String name;
    private String expertise;
    private String phone;
    private String email;
    private String location;
}