# malluscript
Javascript Malayalam - Simple malayalam wrapped javascript. Using a simple concept in a funny way.

```javascript
  <script>
    var Mallu  = new MalluScript();
    // malluscript converted to javascript
    var result = Mallu.compile("പറയുക('മല്ലു സ്ക്രിപ്റ്റിലേക്ക് സ്വാഗതം') ");
    // alert('മല്ലു സ്ക്രിപ്റ്റിലേക്ക് സ്വാഗതം');
  
    // Execute malluscript
     Mallu.compile("പറയുക('മല്ലു സ്ക്രിപ്റ്റിലേക്ക് സ്വാഗതം') ");
</script>
```

Or execute as normal javascript 

```javascript

<script type="text/malluscript">
  
   വണ്ടികൾ = ['കാള','കുതിര','മോട്ടോർ'];
   വണ്ടി_നാമം = "";
   ഒരു വണ്ടി യെ വണ്ടികൾ നിന്നും എടുക്കുക  {
      വണ്ടി_നാമം+= വണ്ടികൾ[വണ്ടി]  + 'വണ്ടി ,'; 
   } 
   പറയുക(വണ്ടി_നാമം);

</script>
```  
