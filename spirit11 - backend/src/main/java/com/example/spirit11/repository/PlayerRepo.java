package com.example.spirit11.repository;

import com.example.spirit11.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepo extends JpaRepository<Player, Long> {
    List<Player> findByCategory(String category);

    @Query("SELECT COALESCE(SUM(p.wickets), 0) FROM Player p")
    int countAllWickets();

    @Query("SELECT COALESCE(SUM(p.totalRuns), 0) FROM Player p")
    int countTotalRuns();

    @Query("SELECT p FROM Player p ORDER BY p.wickets DESC LIMIT 1")
    Player findPlayerWithMaxWickets();

    @Query("SELECT p FROM Player p ORDER BY p.totalRuns DESC LIMIT 1")
    Player findPlayerWithMaxRuns();
}
