package net.maciejewski.drinktracker.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import net.maciejewski.drinktracker.model.DrinkUnit;

@Repository()
public interface DrinkUnitRepository extends CrudRepository<DrinkUnit,Long>{
    
}
