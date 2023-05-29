package fr.umontpellier.iut.graphes;

import fr.umontpellier.iut.rails.*;
import fr.umontpellier.iut.rails.data.*;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.*;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class NosGrapheTest {

    private Graphe g10Complet;

    private Graphe g10Chaine;

    private Graphe g10Cycle;

    private Graphe g20Complet;

    private Graphe grapheVide;

    private Graphe grapheOrdre1;

    private Graphe particulier1;

    private Graphe grapheChaine2;

    private Graphe graphePasSimple2;

    private Graphe graphePasCycle6;
    private Graphe grapheForet3;
    private Graphe isomorphe1To2;
    private Graphe isomorphe2To1;

    @BeforeEach
    void setUp() {
        List<Arete> complet10 = new ArrayList<>();
        List<Arete> chaine = new ArrayList<>();
        List<Arete> cycle = new ArrayList<>();
        List<Arete> complet20 = new ArrayList<>();
        List<Arete> chaine2 = new ArrayList<>();
        List<Arete> pasSimple2 = new ArrayList<>();
        List<Arete> pasCycle6 = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            for (int j = i + 1; j < 10; j++) {
                complet10.add(new Arete(i, j));
            }
        }

        for (int i = 0; i < 9; i++) {
            chaine.add(new Arete(i, i + 1));
        }

        for (int i = 0; i < 9; i++) {
            cycle.add(new Arete(i, i + 1));
        }
        cycle.add(new Arete(9, 0));

        for (int i = 0; i < 20; i++) {
            for (int j = i + 1; j < 20; j++) {
                complet20.add(new Arete(i, j));
            }
        }

        for (int i = 0; i < 2; i++) {
            chaine2.add(new Arete(i, i + 1));
        }

        pasSimple2.add(new Arete(0, 1, new RouteMaritime(null, null, null, 6)));
        pasSimple2.add(new Arete(0, 1, new RouteTerrestre(null, null, null, 5)));

        for (int i = 0; i < 2; i++) {
            pasCycle6.add(new Arete(i, i + 1));
            pasCycle6.add(new Arete(i + 3, i + 4));
        }

        pasCycle6.add(new Arete(0, 2));
        pasCycle6.add(new Arete(3, 5));

        g10Complet = new Graphe(complet10);
        g10Chaine = new Graphe(chaine);
        g10Cycle = new Graphe(cycle);
        g20Complet = new Graphe(complet20);
        grapheVide = new Graphe();
        grapheOrdre1 = new Graphe(1);
        particulier1 = new Graphe();
        particulier1.ajouterArete(new Arete(0, 1));
        particulier1.ajouterArete(new Arete(2, 3));
        particulier1.ajouterArete(new Arete(2, 4));
        particulier1.ajouterArete(new Arete(3, 4));
        grapheChaine2 = new Graphe(chaine2);
        graphePasSimple2 = new Graphe(pasSimple2);
        graphePasCycle6 = new Graphe(pasCycle6);

        List<Arete> foret3 = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            foret3.add(new Arete(i, i + 1));
            foret3.add(new Arete(i + 5, i + 6));
            foret3.add(new Arete(i + 10, i + 11));
        }
        grapheForet3 = new Graphe(foret3);

        isomorphe1To2 = new Graphe(4);
        isomorphe2To1 = new Graphe(4);

        for (int i = 0; i < 3; i++) {
            isomorphe1To2.ajouterArete(new Arete(i, i + 1));
        }

        isomorphe2To1.ajouterArete(new Arete(5, 6));
        isomorphe2To1.ajouterArete(new Arete(6, 7));
        isomorphe2To1.ajouterArete(new Arete(5, 8));

        for (int i = 0; i < 4; i++) {
            isomorphe2To1.supprimerSommet(i);
        }

    }

    @Test
    void test_Constructora_Uno() {
        Graphe g = new Graphe(10);
        assertEquals(10, g.nbSommets());
    }

    @Test
    void test_Constructora_Dos() {
        Graphe g = new Graphe();
        assertEquals(0, g.nbSommets());
    }

    @Test
    void test_Constructora_Tres() {
        List<Arete> lesArete = new ArrayList<>();
        lesArete.add(new Arete(0, 1));
        lesArete.add(new Arete(0, 42));
        Graphe g = new Graphe(lesArete);
        assertEquals(2, g.nbAretes());
        assertEquals(3, g.nbSommets());
    }

    @Test
    void test_Constructora_Quatre_uno() {
        System.out.println(g10Chaine);
        Set<Integer> lesSommets = new HashSet<>();
        lesSommets.add(1);
        lesSommets.add(2);
        Graphe g = new Graphe(g10Chaine, lesSommets);
        assertEquals(2, g.nbSommets());
        assertEquals(1, g.nbAretes());
        lesSommets.add(3);
        lesSommets.add(4);
        Graphe g1 = new Graphe(g10Chaine, lesSommets);
        assertEquals(4, g1.nbSommets());
        assertEquals(3, g1.nbAretes());
    }

    @Test
    void test_Constructora_Quatre_dos() {
        Set<Integer> lesSommets = new HashSet<>();
        lesSommets.add(1);
        lesSommets.add(2);
        lesSommets.add(3);
        lesSommets.add(4);
        Graphe g = new Graphe(g10Complet, lesSommets);
        assertEquals(4, g.nbSommets());
        assertEquals(6, g.nbAretes());
    }

    @Test
    void test_Constructora_Quatre_tres_with_sommet_no_existing() {
        Set<Integer> lesSommets = new HashSet<>();
        lesSommets.add(1);
        lesSommets.add(2);
        lesSommets.add(3);
        lesSommets.add(4);
        lesSommets.add(55);
        Graphe g = new Graphe(g10Complet, lesSommets);
        assertEquals(4, g.nbSommets());
        assertEquals(6, g.nbAretes());
    }

    @Test
    void test_chaine10() {
        assertEquals(10, g10Chaine.nbSommets());
        assertEquals(9, g10Chaine.nbAretes());
    }

    @Test
    void test_complet10() {
        assertEquals(10, g10Complet.nbSommets());
        assertEquals(45, g10Complet.nbAretes());
    }

    @Test
    void test_cycle10() {
        assertEquals(10, g10Cycle.nbSommets());
        assertEquals(10, g10Cycle.nbAretes());
    }

    @Test
    void test_particulier1() {
        assertEquals(5, particulier1.nbSommets());
        assertEquals(4, particulier1.nbAretes());
    }

    @Test
    void test_supprimer_arrete() {
        Arete a = new Arete(0, 1);
        g10Complet.supprimerArete(a);
        assertEquals(44, g10Complet.nbAretes());
        assertEquals(10, g10Complet.nbSommets());
    }

    @Test
    void test_supprimer_sommet() {
        g10Complet.supprimerSommet(0);
        assertEquals(9, g10Complet.nbSommets());
        assertEquals(36, g10Complet.nbAretes());
    }

    @Test
    void test_get_voisin() {
        Set<Integer> lesVoisins = new HashSet<>();
        lesVoisins.add(1);
        lesVoisins.add(2);
        lesVoisins.add(3);
        lesVoisins.add(4);
        lesVoisins.add(5);
        lesVoisins.add(6);
        lesVoisins.add(7);
        lesVoisins.add(8);
        lesVoisins.add(9);
        assertEquals(lesVoisins, g10Complet.getVoisins(0));
    }

    @Test
    void test_degre_graphe() {
        assertEquals(9, g10Complet.degre(0));
        assertEquals(2, g10Cycle.degre(0));
        assertEquals(1, g10Chaine.degre(0));
        assertEquals(1, g10Chaine.degre(9));
        assertEquals(2, g10Cycle.degre(9));
        assertEquals(2, g10Chaine.degre(1));
    }

    @Test
    void test_degre_graphe_max() {
        assertEquals(9, g10Complet.degreMax());
        assertEquals(2, g10Cycle.degreMax());
        assertEquals(2, g10Chaine.degreMax());
    }

    @Test
    void test_est_complet() {
        assertTrue(grapheVide.estComplet());
        assertTrue(grapheOrdre1.estComplet());
        assertFalse(g10Cycle.estComplet());
        assertFalse(g10Chaine.estComplet());
        assertTrue(g10Complet.estComplet());
        assertTrue(g20Complet.estComplet());
    }

    @Test
    void test_est_une_chaine() {
        assertFalse(g10Cycle.estUneChaine());
        assertTrue(g10Chaine.estUneChaine());
        assertFalse(g10Complet.estUneChaine());
        assertTrue(grapheVide.estUneChaine());
        assertTrue(grapheOrdre1.estUneChaine());
        assertFalse(particulier1.estUneChaine());
        assertTrue(grapheChaine2.estUneChaine());
    }

    @Test
    void test_est_simple() {
        grapheVide.ajouterArete(new Arete(1, 2, null));
        grapheVide.ajouterArete(new Arete(1, 3, null));
        assertTrue(grapheVide.estSimple());
        grapheVide.ajouterArete(new Arete(1, 1, null));
        assertFalse(grapheVide.estSimple());
        grapheVide.supprimerArete(new Arete(1, 1, null));
        assertTrue(grapheVide.estSimple());
        grapheVide.ajouterArete(new Arete(2, 1, null));
        assertFalse(grapheVide.estSimple());
        grapheVide.supprimerArete(new Arete(2, 1, null));
        assertTrue(grapheVide.estSimple());
    }

    @Test
    void test_est_un_cycle() {
        assertTrue(grapheVide.estUnCycle());
        assertFalse(graphePasSimple2.estUnCycle());
        assertFalse(g10Chaine.estUnCycle());
        assertFalse(g10Complet.estUnCycle());
        assertFalse(graphePasCycle6.estUnCycle());
    }

    @Test
    void test_get_classe_connexite() {
        assertEquals(10, g10Complet.getClasseConnexite(0).size());
        assertEquals(10, g10Complet.getClasseConnexite(1).size());
        assertEquals(3, graphePasCycle6.getClasseConnexite(1).size());
    }

    @Test
    void test_get_ensemble_classe_connexite() {
        assertEquals(1, g10Complet.getEnsembleClassesConnexite().size());
        assertEquals(2, graphePasCycle6.getEnsembleClassesConnexite().size());
        assertEquals(3, grapheForet3.getEnsembleClassesConnexite().size());

        System.out.println(grapheForet3.getEnsembleClassesConnexite());

        Set<Integer> sommet = new HashSet<>();
        sommet.add(0);
        sommet.add(1);
        sommet.add(2);
        Graphe sousGraphe = new Graphe(graphePasCycle6, sommet);

        assertEquals(3, sousGraphe.nbSommets());
        assertEquals(3, sousGraphe.nbAretes());
    }

    @Test
    void test_est_un_isthme() {
        Arete a = new Arete(2, 3, null);
        graphePasCycle6.ajouterArete(a);
        assertTrue(graphePasCycle6.estUnIsthme(a));
        graphePasCycle6.supprimerArete(a);
        assertFalse(graphePasCycle6.estUnIsthme(a));
    }

    @Test
    void test_sont_adjacent() {
        assertTrue(g10Complet.sontAdjacents(0, 1));
        assertTrue(g10Complet.sontAdjacents(1, 0));
        assertFalse(g10Chaine.sontAdjacents(1, 5));
        assertFalse(g10Chaine.sontAdjacents(5, 1));
    }

    @Test
    void test_est_une_foret() {
        assertTrue(grapheVide.estUneForet());
        assertFalse(g20Complet.estUneForet());
        assertTrue(g10Chaine.estUneForet());
        assertTrue(grapheForet3.estUneForet());
    }

    @Test
    void test_ensemble_sommet() {
        Set<Integer> sommetsGraphe10Complet = new HashSet<>();
        for (int i = 0; i < 10; i++) {
            sommetsGraphe10Complet.add(i);
        }
        assertTrue(sommetsGraphe10Complet.equals(g10Complet.ensembleSommets()));
    }

    @Test
    void test_fusionner_sommet() {
        graphePasCycle6.fusionnerSommets(0, 1);
        graphePasCycle6.fusionnerSommets(0, 999);
        assertEquals(4, graphePasCycle6.nbAretes());
        assertEquals(5, graphePasCycle6.nbSommets());
    }

    @Test
    void test_est_un_arbre() {
        assertFalse(grapheVide.estUnArbre());
        assertFalse(graphePasCycle6.estUnArbre());
        assertTrue(grapheOrdre1.estUnArbre());
        assertTrue(g10Chaine.estUnArbre());
    }

    @Test
    void test_isomorphe() {
        assertFalse(Graphe.sontIsomorphes(isomorphe1To2, g20Complet));
        assertTrue(Graphe.sontIsomorphes(isomorphe1To2, isomorphe2To1));
    }

    @Test
    void test_sequence() {
        List<Integer> list1 = List.of(1, 2, 2, 2);
        List<Integer> list2 = List.of(1, 2, 3, 1, 1, 1, 2, 1);
        assertFalse(Graphe.sequenceEstGraphe(list1));
        assertTrue(Graphe.sequenceEstGraphe(list2));
    }

    @Test
    void test_sequence_degre_graphe() {
        List<Integer> sequenceChaineRes = List.of(1, 2, 2, 2, 2, 2, 2, 2, 2, 1);
        List<Integer> sequenceChaineResDesordonne = List.of(1, 2, 2, 2, 2, 2, 2, 2, 1, 2);
        assertEquals(sequenceChaineRes, g10Chaine.sequenceDegreGraphe());
        assertNotEquals(sequenceChaineResDesordonne, g10Chaine.sequenceDegreGraphe());
    }

    @Test
    void test_meme_sequence() {
        List<Integer> res1 = List.of(1, 2, 2, 2, 2, 2, 2, 2, 2, 1);
        List<Integer> res2 = List.of(1, 2, 2, 2, 2, 2, 2, 2, 1, 2);
        List<Integer> res3 = List.of(1, 2, 2, 2, 2, 2, 2, 1, 1, 1);
        assertTrue(Graphe.memeSequence(res1, res2));
        assertFalse(Graphe.memeSequence(res3, res1));
    }

    @Test
    void test_sequence_ordonnee() {
        List<Integer> l1 = List.of(1, 5, 3, 3, 2, 2, 2, 2);
        List<Integer> l2 = Graphe.sequenceDegreOrdonnee(l1);
        List<Integer> l3 = List.of(1, 2, 2, 2, 2, 3, 3, 5);
        assertEquals(l2, l3);
    }

    @Test
    void test_parcour_sans_repetition() {
        assertEquals(6, g10Chaine.parcoursSansRepetition(0, 5, false).size());
    }

}
    @Test
    void test_generer_fils() {
        System.out.println(graphePasCycle6);
        List<Integer> cheminCourant = List.of(0);
        assertEquals(2, graphePasCycle6.genererFils(cheminCourant).size());
        assertEquals(19, g20Complet.genererFils(cheminCourant).size());
        System.out.println(g20Complet.genererFils(cheminCourant));
    }
}