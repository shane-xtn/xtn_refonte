import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-100 dark:bg-zinc-900/30" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            UN PEU, BEAUCOUP, PASSIONNEMENT, A LA FOLIE
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Des créatifs qui aiment la technique, des développeurs qui aiment le
            marketing... autant d'experts dans leur domaine qui sont
            profondément ouverts aux autres métiers de l'agence. Et c'est ainsi
            que les contraintes de chaque métier deviennent sources de valeurs
            pour les autres. La passion fédère nos équipes créatives, techniques
            et marketing. L'innovation nous motive. Et le sens du client nous
            galvanise. Crée en 2009, c’est aujourd’hui 25 talents au service de
            vos projets.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="md:w-1/3">
            <div className="flex flex-col-reverse items-center justify-center !overflow-visible">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-1 mt-6">Nawaaz</h3>
                <p>Dénicheur de tendances</p>
                <ol className="flex gap-2 justify-center">
                  <li># sensible</li>
                  <li># émotion</li>
                </ol>
              </div>
              <Image
                src={"/img/Nawaaz_2.jpg"}
                width={360}
                height={438}
                alt="Nawaaz - web designer"
                className=" rounded-[20px]"
              />
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="flex-col-reverse flex items-center justify-center  !overflow-visible">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-1 mt-6">Nawaaz</h3>
                <p>Dénicheur de tendances</p>
                <ol className="flex gap-2 justify-center">
                  <li># sensible</li>
                  <li># émotion</li>
                </ol>
              </div>
              <Image
                src={"/img/Laurent.jpg"}
                width={360}
                height={438}
                alt="Laurent - CEO"
                className=" rounded-[20px]"
              />
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="flex flex-col-reverse items-center justify-center  !overflow-visible">
              <div className="text-center px-6">
                <h3 className="text-xl font-bold mb-1 mt-6">Nawaaz</h3>
                <p>Dénicheur de tendances</p>
                <ol className="flex gap-2 justify-center">
                  <li># sensible</li>
                  <li># émotion</li>
                </ol>
              </div>
              <Image
                src={"/img/Vanessa_0.jpg"}
                width={360}
                height={438}
                alt="Vanessa tech director"
                className=" rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
