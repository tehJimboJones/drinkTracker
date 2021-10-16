package net.maciejewski.drinktracker.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "drink_unit")
@JsonIgnoreProperties(value = {"recCrtTs", "recUpdTs", "RecUpdBy"}, allowGetters = true)
public class DrinkUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String product;
    private float sizeInOz;
    private float ABV;
    private String description;
    @Column(updatable = false, insertable = false)
    private Date recCrtTs;
    @Column(updatable = false, insertable = false)
    private Date recUpdTs;
    private Long recUpdBy;
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
    
    public String getProduct() {
        return product;
    }
    
    public void setProduct(String product) {
        this.product = product;
    }
    
    public float getSizeInOz() {
        return sizeInOz;
    }
    
    public void setSizeInOz(float sizeInOz) {
        this.sizeInOz = sizeInOz;
    }
    
    public float getABV() {
        return ABV;
    }
    
    public void setABV(float aBV) {
        ABV = aBV;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public Date getRecCrtTs() {
        return recCrtTs;
    }
    
    public void setRecCrtTs(Date recCrtTs) {
        this.recCrtTs = recCrtTs;
    }
    
    public Date getRecUpdTs() {
        return recUpdTs;
    }
    
    public void setRecUpdTs(Date recUpdTs) {
        this.recUpdTs = recUpdTs;
    }
    
    public Long getRecUpdBy() {
        return recUpdBy;
    }
    
    public void setRecUpdBy(Long recUpdBy) {
        this.recUpdBy = recUpdBy;
    }
}
