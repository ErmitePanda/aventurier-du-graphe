package fr.umontpellier.iut.graphes;

import java.util.*;

public class GrapheUtile {

    /**
     * Renvoie les voisin sous une autre structure de donnée qui permet d'accéder au élément
     * de celle-ci
     * @param voisinBloque
     * @return la liste des voisins sous forme ArrayList
     */
    public static ArrayList<Integer> getVoisinAccessible(Set<Integer> voisinBloque) {
        return new ArrayList<>(voisinBloque);
    }
}
