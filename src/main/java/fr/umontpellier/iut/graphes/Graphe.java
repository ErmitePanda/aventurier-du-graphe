package fr.umontpellier.iut.graphes;

import fr.umontpellier.iut.rails.Route;

import java.sql.Array;
import java.util.*;

/**
 * (Multi) Graphe non-orienté pondéré. Le poids de chaque arête correspond à la longueur de la route correspondante.
 * Pour une paire de sommets fixée {i,j}, il est possible d'avoir plusieurs arêtes
 * d'extrémités i et j et de longueur identique, du moment que leurs routes sont différentes.
 * Par exemple, il est possible d'avoir les deux arêtes suivantes dans le graphe :
 * Arete a1 = new Arete(i,j,new RouteTerrestre(villes.get("Lima"), villes.get("Valparaiso"), Couleur.GRIS, 2))
 * et
 * Arete a2 = new Arete(i,j,new RouteTerrestre(villes.get("Lima"), villes.get("Valparaiso"), Couleur.GRIS, 2))
 * Dans cet exemple (issus du jeu), a1 et a2 sont deux arêtes différentes, même si leurs routes sont très similaires
 * (seul l'attribut nom est différent).
 */
public class Graphe {

    /**
     * Liste d'incidences :
     * mapAretes.get(1) donne l'ensemble d'arêtes incidentes au sommet dont l'identifiant est 1
     * Si mapAretes.get(u) contient l'arête {u,v} alors, mapAretes.get(v) contient aussi cette arête
     */
    private Map<Integer, HashSet<Arete>> mapAretes;


    /**
     * Construit un graphe à n sommets 0..n-1 sans arêtes
     */
    public Graphe(int n) {
        mapAretes = new HashMap<>();
        for (int i = 0; i < n; i++) {
            mapAretes.put(i, new HashSet<>());
        }
    }

    /**
     * Construit un graphe vide
     */
    public Graphe() {
        mapAretes = new HashMap<>();
    }

    /**
     * Construit un graphe à partir d'une collection d'arêtes.
     *
     * @param aretes la collection d'arêtes
     */
    public Graphe(Collection<Arete> aretes) {
        mapAretes = new HashMap<>();
        for (Arete a : aretes) {
            if (mapAretes.get(a.i()) == null) {
                mapAretes.put(a.i(), new HashSet<>());
                mapAretes.get(a.i()).add(a);
            } else {
                mapAretes.get(a.i()).add(a);
            }

            if (mapAretes.get(a.j()) == null) {
                mapAretes.put(a.j(), new HashSet<>());
                mapAretes.get(a.j()).add(a);
            } else {
                mapAretes.get(a.j()).add(a);
            }
        }
    }

    /**
     * À partir d'un graphe donné, construit un sous-graphe induit
     * par un ensemble de sommets, sans modifier le graphe donné
     *
     * @param graphe le graphe à partir duquel on construit le sous-graphe
     * @param X      l'ensemble de sommets qui définissent le sous-graphe
     *               prérequis : X inclus dans V()
     */
    public Graphe(Graphe graphe, Set<Integer> X) {
        mapAretes = new HashMap<>();
        for (Integer sommet : graphe.mapAretes.keySet()) {
            if (X.contains(sommet)) {
                mapAretes.computeIfAbsent(sommet, k -> new HashSet<>()); // Init de key/value s'il existe pas
                for (Arete arete : graphe.mapAretes.get(sommet)) {
                    if (X.contains(arete.i()) && X.contains(arete.j())) {
                        mapAretes.get(sommet).add(arete);
                    }
                }
            }
        }
    }

    /*
     * Constructeur par copie
     * @param graphe le graphe à copier
     */
    public Graphe(Graphe graphe) {
        this(graphe, graphe.ensembleSommets());
    }

    /**
     * @return l'ensemble de sommets du graphe
     */
    public Set<Integer> ensembleSommets() {
        return mapAretes.keySet();
    }

    /**
     * @return l'ordre du graphe (le nombre de sommets)
     */
    public int nbSommets() {
        return mapAretes.size();
    }

    /**
     * @return le nombre d'arêtes du graphe (ne pas oublier que this est un multigraphe : si plusieurs arêtes sont présentes entre un même coupe de sommets {i,j}, il faut
     * toutes les compter)
     */
    public int nbAretes() {
        int nbArrete = 0;
        for (Integer i : mapAretes.keySet()) {
            nbArrete += mapAretes.get(i).size();
        }
        return nbArrete/2;
    }


    public boolean contientSommet(Integer v) {
        return ensembleSommets().contains(v);
    }

    /**
     * Ajoute un sommet au graphe s'il n'est pas déjà présent
     *
     * @param v le sommet à ajouter
     */
    public void ajouterSommet(Integer v) {
        if (!mapAretes.containsKey(v)) {
            mapAretes.put(v,new HashSet<>());
        }
    }

    /**
     * Ajoute une arête au graphe si elle n'est pas déjà présente
     *
     * @param a l'arête à ajouter. Si les 2 sommets {i,j} de a ne sont pas dans l'ensemble,
     *          alors les sommets sont automatiquement ajoutés à l'ensemble de sommets du graphe
     */
    public void ajouterArete(Arete a) {

        // Ajout des sommets si ils n'existent pas
        if (!mapAretes.containsKey(a.i())) {
            ajouterSommet(a.i());
        }
        if (!mapAretes.containsKey(a.j())) {
            ajouterSommet(a.j());
        }
        // Ajout de l'arête
        // On vérifie que l'arête n'existe pas déjà
        // Si elle existe, on ne fait rien
        // Sinon on l'ajoute

        if (!mapAretes.get(a.i()).contains(a))
            mapAretes.get(a.i()).add(a);

        if (!mapAretes.get(a.j()).contains(a))
            mapAretes.get(a.j()).add(a);
    }

    /**
     * Supprime une arête du graphe si elle est présente, sinon ne fait rien
     *
     * @param a arête à supprimer
     *
     */
    public void supprimerArete(Arete a) {
        if (mapAretes.get(a.i()).contains(a))
            mapAretes.get(a.i()).remove(a);

        if (mapAretes.get(a.j()).contains(a))
            mapAretes.get(a.j()).remove(a);
    }

    /**
     * @param a l'arête dont on veut tester l'existence
     * @return true si a est présente dans le graphe
     */
    public boolean existeArete(Arete a) {
        for(int sommet : mapAretes.keySet()) {
            if (mapAretes.get(sommet).contains(a)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Integer v : mapAretes.keySet()) {
            sb.append("sommet").append(v).append(" : ").append(mapAretes.get(v)).append("\n");
        }
        return sb.toString();
    }

    /**
     * Retourne l'ensemble des sommets voisins d'un sommet donné.
     * Si le sommet n'existe pas, l'ensemble retourné est vide.
     *
     * @param v l'identifiant du sommet dont on veut le voisinage
     */
    public Set<Integer> getVoisins(int v) {
        // Comme c'est un ensemble, on aura pas de problème d'ajout de doublons
        if (mapAretes.get(v) == null) {
            return new HashSet<>();
        }
        HashSet<Integer> voisins = new HashSet<>();
        for(Arete arete : mapAretes.get(v)) {
            voisins.add(arete.i());
            voisins.add(arete.j());
        }
        // Comme on a ajouter tous les sommets du graphe, il faut supprimer le sommet ou on regarde les voisins
        voisins.remove(v);
        return voisins;
    }

    /**
     * Supprime un sommet du graphe, ainsi que toutes les arêtes incidentes à ce sommet
     *
     * @param v le sommet à supprimer
     */
    public void supprimerSommet(int v) {
        if (mapAretes.containsKey(v)) {
            mapAretes.remove(v);
            for (Integer sommet : mapAretes.keySet()) {
                mapAretes.get(sommet).removeIf(arete -> arete.i() == v || arete.j() == v);
            }
        }
    }

    public int degre(int v) {
        return getVoisins(v).size();
    }

    /**
     *
     * @return le degré max, et Integer.Min_VALUE si le graphe est vide
     */
    public int degreMax(){
        int degremax = -1;
        for(int sommet : mapAretes.keySet()) {
            if (getVoisins(sommet).size() > degremax) {
                degremax = getVoisins(sommet).size();
            }
        }
        return degremax == -1 ? Integer.MIN_VALUE : degremax;
    }


    /**
     * Un graphe est simple s'il ne comporte aucune boucle et que deux arêtes
     * ne relient jamais la même paire de sommets
     *
     * Surement pour tester si une route n'est pas double
     * @return
     */
    public boolean estSimple(){
        for(int sommet : mapAretes.keySet()) {
            for(Arete arete : mapAretes.get(sommet)) {
                // Si l'arrête est relié à elle même
                if(arete.i() == arete.j()) {
                    return false;
                }
                else {
                    for (Arete aretebis : mapAretes.get(arete.getAutreSommet(sommet))) {
                        // Si les 2 sommets possèdes plusieurs arrêtes entre-eux
                        // (2 max vu que c'est par rapport au permutation de sommet)
                        if (aretebis.j() == arete.i() && aretebis.i() == arete.j()) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }

    /**
     * @return ture ssi pour tous sommets i,j de this avec (i!=j), alors this contient une arête {i,j}
     *
     */
    public boolean estComplet() {
        // Cas du graphe vide
        if (degreMax() == Integer.MIN_VALUE) {
            return true;
        }

        // pour chaque sommet, on vérifie qu'il y a bien le bon nombre d'arrête pour être complet (cad N - 1)
        for (Integer sommet : mapAretes.keySet()) {
            if (degre(sommet) != nbSommets() - 1) {
                return false;
            }
        }
        return true;
    }

    /**
     * @return true ssi this est une chaîne. Attention, être une chaîne
     * implique en particulier que l'on a une seule arête (et pas plusieurs en parallèle) entre
     * les sommets successifs de la chaîne. On considère que le graphe vide est une chaîne.
     */
    public boolean estUneChaine() {
        int nbBornes = 0;
        HashSet<Integer> voisin = new HashSet<>();
        if (nbSommets() == 0 || nbSommets() == 1) {
            return true;
        } else {
            for (Integer sommet : mapAretes.keySet()) {
                if (degre(sommet) == 1) {
                    voisin.addAll(getVoisins(sommet));
                    for (Integer voisinnage : voisin) {

                        // Cas ou le sommet est de deg 1 (borne) et que son voisin est de deg 2

                        if (degre(voisinnage) == 2) {
                            nbBornes++;
                            voisin.clear();
                        }

                        // Cas ou le graphe est d'ordre 2 et possède 1 arrête

                        else if (degre(voisinnage) == 1 && nbSommets() == 2) {
                            return true;
                        }

                        // Si aucun des cas alors ce n'est pas une chaîne

                        else {
                            return false;
                        }
                    }
                } else if (degre(sommet) > 2) {
                    return false;
                }
            }
        }
        return nbBornes == 2;
    }


    /**
     * @return true ssi this est un cycle. Attention, être un cycle implique
     * en particulier que l'on a une seule arête (et pas plusieurs en parallèle) entre
     * les sommets successifs du cycle.
     * On considère que dans le cas où G n'a que 2 sommets {i,j}, et 2 arêtes parallèles {i,j}, alors G n'est PAS un cycle.
     * On considère que le graphe vide est un cycle.
     */
    public boolean estUnCycle() {
        if (nbSommets() == 0) {
            return true;
            // Cas ou la classe de connexité est de taille supérieur à 1 n'est pas un cycle
        } else if (getEnsembleClassesConnexite().size() > 1) {
            return false;
        } else {
            for (Integer sommet : mapAretes.keySet()) {
                if (degre(sommet) != 2) {
                    return false;
                }
            }
        }

        return true;
    }

    public boolean estUnArbre() {
        if (nbSommets() == 0) {
            return false;
        }
        return nbAretes() == nbSommets() - 1 && estConnexe();
    }

    public boolean estConnexe() {
        return getEnsembleClassesConnexite().size() == 1;
    }

    public boolean estUneForet() {
        if (nbSommets() == 0) {
            return true;
        }

        Set<Integer> sommetGraphe = ensembleSommets();
        ArrayList<Integer> listeAccessible = new ArrayList<>();
        listeAccessible.addAll(sommetGraphe);

        while (!listeAccessible.isEmpty()) {
            int choix = listeAccessible.get(0);
            Set<Integer> sousGraphe = getClasseConnexite(choix);

            Graphe g = new Graphe(this, sousGraphe);
            if (!g.estUnArbre()) {
                return false;
            }

            listeAccessible.removeAll(sousGraphe);
        }

        return true;
    }

    /*
     * Renvoie vrai si le graphe qui appelle cette fonction contient un cycle.
     * Vérifie la présence d'un cycle dans chacune des composantes connexes.
     */
    public boolean contientCycle() {
        int sommetCourant, sommetPrecedent;
        Set<Integer> sommetsPasses = new HashSet<>();
        ArrayList<Integer> aTraiter = new ArrayList<>();
        for(Set<Integer> cc: getEnsembleClassesConnexite()) {
            sommetPrecedent = cc.stream().toList().get(0);
            aTraiter.addAll(getVoisins(sommetPrecedent));
            sommetsPasses.add(sommetPrecedent);
            while(!aTraiter.isEmpty()) {
                sommetCourant = aTraiter.remove(0);
                for(int s: getVoisins(sommetCourant)) {
                    if(sommetsPasses.contains(s) && sommetPrecedent != s) {
                        return true;
                    }
                    else if(!sommetsPasses.contains(s)) {
                        sommetsPasses.add(s);
                        aTraiter.add(s);
                    }
                }
                sommetPrecedent = sommetCourant;
            }
        }
        return false;
    }

    public Graphe sousGraphe(Set<Integer> sommetsAGarder) {
        return new Graphe(this, sommetsAGarder);
    }

    public Set<Integer> getClasseConnexite(int v) {
        Set<Integer> elementConnexeAvecV = new HashSet<>();
        Set<Integer> pasEncoreVisite = new HashSet<>();
        pasEncoreVisite.add(v);
        while (!pasEncoreVisite.isEmpty()) {
            int sommet = pasEncoreVisite.iterator().next();
            pasEncoreVisite.remove(sommet);
            elementConnexeAvecV.add(sommet);
            for (int voisin : getVoisins(sommet)) {
                if (!elementConnexeAvecV.contains(voisin)) {
                    pasEncoreVisite.add(voisin);
                }
            }
        }
        return elementConnexeAvecV;
    }

    public Set<Set<Integer>> getEnsembleClassesConnexite() {
        Set<Set<Integer>> ensembleClassesConnexite = new HashSet<>();
        ArrayList<Integer> sommetsRestants = new ArrayList<>(ensembleSommets());
        sommetsRestants.addAll(ensembleSommets());

        while (!sommetsRestants.isEmpty()) {
            int sommet = sommetsRestants.get(0);
            Set<Integer> classeConnexite = getClasseConnexite(sommet);
            for (int sommetClasse : classeConnexite) {
                sommetsRestants.remove(Integer.valueOf(sommetClasse));
            }
            ensembleClassesConnexite.add(classeConnexite);
        }
        return ensembleClassesConnexite;
    }

    /**
     * @return true si et seulement si l'arête passée en paramètre est un isthme dans le graphe.
     */
    public boolean estUnIsthme(Arete a) {
        int classeConnexiteBefore = getEnsembleClassesConnexite().size();
        supprimerArete(a);
        int classeConnexiteAfter = getEnsembleClassesConnexite().size();
        ajouterArete(a);
        return classeConnexiteBefore != classeConnexiteAfter;
    }

    public boolean sontAdjacents(int i, int j) {
        if (!contientSommet(i) || !contientSommet(j)) {
            return false;
        }
        Set<Integer> voisinI = getVoisins(i);
        return voisinI.contains(j);
    }

    /**
     * Fusionne les deux sommets passés en paramètre.
     * Toutes les arêtes reliant i à j doivent être supprimées (pas de création de boucle).
     * L'entier correspondant au sommet nouvellement créé sera le min{i,j}. Le voisinage du nouveau sommet
     * est l'union des voisinages des deux sommets fusionnés.
     * Si un des sommets n'est pas présent dans le graphe, alors cette fonction ne fait rien.
     */
    public void fusionnerSommets(int i, int j) {
        HashSet<Arete> newAreteSommet = new HashSet<>();

        if (i != j && contientSommet(i) && contientSommet(j)) {
            for (Arete arete : mapAretes.get(i)) {
                if (arete.i() != i && arete.j() != j || arete.i() != j && arete.j() != i) {
                    newAreteSommet.add(arete);
                } else {
                    mapAretes.get(i).remove(arete);
                }

                for (Arete areteBis : mapAretes.get(j)) {
                    if (areteBis.i() != i && areteBis.j() != j || areteBis.i() != j && areteBis.j() != i) {
                        newAreteSommet.add(areteBis);
                    } else {
                        mapAretes.get(i).remove(areteBis);
                    }
                }
            }

            supprimerSommet(Math.max(i, j));
        }
    }

    /**
     * @return true si et seulement si la séquence d'entiers passée en paramètre correspond à un graphe simple valide.
     * La pondération des arêtes devrait être ignorée.
     */
    public static boolean sequenceEstGraphe(List<Integer> sequence) {
        int somme = 0;
        for (Integer i : sequence) {
            somme = somme + i;
            if (i > sequence.size()-1)
                return false;
            }
        return somme % 2 == 0;
    }

    /**
     * Prend une sequence de degre désordonne et en renvoie une dans l'ordre croissant
     * @param sequenceDeg
     * @return Renvoie une sequence de degre ordonnee (croissant)
     */
    public static List<Integer> sequenceDegreOrdonnee(List<Integer> sequenceDeg) {
        PriorityQueue<Integer> sequenceOrdonne = new PriorityQueue<>(new OrdreCroissantEntier());
        sequenceOrdonne.addAll(sequenceDeg);
        List<Integer> newSequenceOrder = new ArrayList<>();
        while (!sequenceOrdonne.isEmpty())
            newSequenceOrder.add(sequenceOrdonne.remove());

        return newSequenceOrder;
    }

    /**
     * @return true si et seulement si la séquence d'entiers passée en paramètre correspond à un graphe valide.
     * La pondération des arêtes devrait être ignorée.
     */
    public static boolean sontIsomorphes(Graphe g1, Graphe g2) {
        if (g1.nbAretes() != g2.nbAretes() || g1.nbSommets() != g2.nbSommets()) {
            return false;
        }

        List<Integer> sequenceG1 = Graphe.sequenceDegreOrdonnee(g1.sequenceDegreGraphe());
        List<Integer> sequenceG2 = Graphe.sequenceDegreOrdonnee(g2.sequenceDegreGraphe());

        if (sequenceG1.equals(sequenceG2)) {
            return true;
        }

        return false;
    }

    /**
     * On suppose que g1 et g2 sont de même tailles et on le même nombre d'arrête
     * @param sequenceG1
     * @param sequenceG2
     * @return
     */
    public static boolean memeSequence(List<Integer> sequenceG1, List<Integer> sequenceG2) {

        PriorityQueue ordonneG1 = new PriorityQueue<>(); ordonneG1.addAll(sequenceG1);
        PriorityQueue ordonneG2 = new PriorityQueue(); ordonneG2.addAll(sequenceG2);

        for (int i = 0; i < ordonneG1.size(); i++) {
            if (ordonneG1.poll() != ordonneG2.poll()) {
                return false;
            }
        }
        return true;
    }

    public List<Integer> sequenceDegreGraphe() {
        List<Integer> sequenceDegre = new ArrayList<>();
        for (Integer sequenceSommet : ensembleSommets()) {
            sequenceDegre.add(degre(sequenceSommet));
        }
        return sequenceDegre;
    }

    private boolean contientSequence(HashSet<Integer> sequence, HashSet<HashSet<Integer>> ensembleSequences) {
        for (HashSet<Integer> sequenceCourante : ensembleSequences) {
            if (sequenceCourante.equals(sequence)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param g1 Graphe 1
     * @param s1 Sommet du graphe 1 à comparer
     * @param g2 Graphe 2
     * @param s2 Sommet du graphe 2 à comparer
     * @return true si le sommet s1 du graphe g1 est une bijection du sommet s2 du graphe g2
     */
    public static boolean estBijection(Graphe g1, int s1, Graphe g2, int s2) {
        if (g1.getVoisins(s1).size() != g2.getVoisins(s2).size())
            return false;

        ArrayList<Integer> degresVoisins1 = new ArrayList<>(), degresVoisins2 = new ArrayList<>();
        for(int s : g1.getVoisins(s1)) {
            degresVoisins1.add(g1.degre(s));
        }
        for(int s : g2.getVoisins(s2)) {
            degresVoisins2.add(g2.degre(s));
        }
        Collections.sort(degresVoisins1);
        Collections.sort(degresVoisins2);
        return degresVoisins1.equals(degresVoisins2);
    }

    /**
     * Renvoie les fils (voisin) du dernier sommet sous forme de chemin
     * @param cheminActuel
     * @return
     */
    public List<List<Integer>> genererFils(List<Integer> cheminActuel) {
        List<List<Integer>> fils = new LinkedList<>();
        int sommetPere = cheminActuel.get(cheminActuel.size()-1);
        Set<Integer> voisin = getVoisins(sommetPere);

        for (Integer v : voisin) {
            List<Integer> newFils = new ArrayList<>();
            newFils.addAll(cheminActuel);
            newFils.add(v);
            fils.add(newFils);
        }

        return fils;
    }

    /**
     * Retourne un plus court chemin entre 2 sommets sans répétition de sommets
     * @param depart le sommet de départ
     * @param arrivee le sommet d'arrivée
     * @param pondere true si les arêtes sont pondérées (pas les longueurs des routes correspondantes dans le jeu)
     *                false si toutes les arêtes ont un poids de 1 (utile lorsque les routes associées sont complètement omises)
     */
    public List<Integer> parcoursSansRepetition(int depart, int arrivee, boolean pondere) {
        if (depart == arrivee) {
            return new ArrayList<>(depart);
        }

        List<Couple> frontiere = new ArrayList<>();
        List<List<Integer>> dejaVu = new ArrayList<>();
        List<Integer> cheminCourant = new ArrayList<>(depart);
        frontiere.add(new Couple(cheminCourant, null));

        while (!frontiere.isEmpty()) {

        }

        return new ArrayList<>();
    }



    /**
     * Retourne un chemin entre 2 sommets sans répétition de sommets et sans dépasser
     * le nombre de bateaux et wagons disponibles. Cette fonction supposera que `this` est
     * bien un graphe issu du jeu avec des vraies routes (les objets routes ne sont pas null).
     * Dans cette fonction la couleur des routes n'est pas à prendre en compte.
     *
     * @param depart    le sommet de départ
     * @param arrivee   le sommet d'arrivée
     * @param nbBateaux le nombre de bateaux disponibles
     * @param nbWagons  le nombre de wagons disponibles
     * @return une liste d'entiers correspondant aux sommets du chemin, où l'élément en position 0 de la liste
     * et le sommet de départ, et l'élément à la dernière position de la liste (taille de la liste - 1) est le somme d'arrivée.
     * Si le chemin n'existe pas, retourne une liste vide (initialisée avec 0 éléments).
     * Pré-requis le graphe `this` est un graphe avec des routes (les objets routes ne sont pas null).
     */
    public List<Integer> parcoursSansRepetition(int depart, int arrivee, int nbWagons, int nbBateaux) {
        if (depart == arrivee) {
            return new ArrayList<>(depart);
        }

        return new ArrayList<>();
    }

    /**
     * Retourne un chemin passant une et une seule fois par tous les sommets d'une liste donnée.
     * Les éléments de la liste en paramètres doivent apparaître dans le même ordre dans la liste de sortie.
     *
     * @param listeSommets la liste de sommets à visiter sans répétition ;
     *                     pré-requis : c'est une sous-liste de la liste retournée
     * @return une liste d'entiers correspondant aux sommets du chemin.
     * Si le chemin n'existe pas, retourne une liste vide.
     */
    public List<Integer> parcoursSansRepetition(List<Integer> listeSommets) {
        return new ArrayList<>();
    }

    /**
     * Question bonus
     * Étant donné un joueur et deux villes (correspondant à deux sommets dans
     * le graphe), déterminer le plus petit ensemble bloquant de routes.
     * Un ensemble est bloquant si le joueur ne peut pas relier les deux villes
     * sans utiliser une de ces routes.
     */
    public Set<Route> ensembleBloquant(int ville1, int ville2) {
        throw new RuntimeException("Méthode non implémentée");
    }
}