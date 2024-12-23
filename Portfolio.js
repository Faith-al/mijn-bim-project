loader.load(
    'models/test-revit-3d-website-view.fbx', // Relatief pad naar je FBX-bestand
    function (object) {
        object.scale.set(0.01, 0.01, 0.01);
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% geladen');
    },
    function (error) {
        console.error('Er is een fout opgetreden bij het laden van het model', error);
    }
);
