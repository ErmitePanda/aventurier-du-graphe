package fr.umontpellier.iut.graphes;

import java.util.Comparator;

public class OrdreCroissantEntier implements Comparator<Integer> {

    @Override
    public int compare(Integer o1, Integer o2) {
        return o1.intValue() - o2.intValue();
    }
}
