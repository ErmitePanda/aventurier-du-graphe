package fr.umontpellier.iut.graphes;

import java.util.ArrayList;
import java.util.List;

public class Couple {
    private List<Integer> cheminCourant;
    private Couple predecesseur;

    public Couple (List<Integer> courant, Couple predecesseur) {
        this.cheminCourant = courant;
        this.predecesseur = predecesseur;
    }

    public void mettreAJour(List<Couple> frontiere, List<List<Integer>> dejaVu) {
        Graphe g = new Graphe(1);
        List<List<Integer>> filsChemin = g.genererFils(cheminCourant);
        Couple c;

        for (List<Integer> fils : filsChemin) {
            if (!dejaVu.contains(fils)) {
                dejaVu.add(fils);
                c = new Couple(fils, this);
                frontiere.add(c);
            }
        }
        // On supprime le pere qui à fait génrer ses fils
        frontiere.remove(this);
    }

    public List<Integer> getCheminCourant() {
        return cheminCourant;
    }
}
