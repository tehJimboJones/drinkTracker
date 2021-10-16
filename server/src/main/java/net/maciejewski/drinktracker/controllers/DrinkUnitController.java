package net.maciejewski.drinktracker.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import net.maciejewski.drinktracker.repositories.DrinkUnitRepository;
import net.maciejewski.drinktracker.model.DrinkUnit;

@RestController
@RequestMapping("/dtapi")
@CrossOrigin()
public class DrinkUnitController {
    @Autowired
    DrinkUnitRepository repository;

    @GetMapping(value="/getAllDrinkUnits")
    public Iterable<DrinkUnit> getAllDrinkUnits() {
        return this.repository.findAll();
    }
}
