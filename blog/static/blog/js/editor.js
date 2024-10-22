document.addEventListener('DOMContentLoaded', function() {
    var easyMDE = new EasyMDE({ element: document.getElementById('id_content') });

    // Function to update the preview
    function updatePreview() {
        var preview = document.getElementById('preview');
        if (preview) {
            preview.innerHTML = easyMDE.options.previewRender(easyMDE.value());
        }
    }

    // Update preview on content change
    easyMDE.codemirror.on('change', updatePreview);

    // Initial preview update
    updatePreview();
});
