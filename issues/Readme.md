Downstream snap has generated enough preview data
==================================================


ErrorSccenario:when using FileReader upload csv file of huge size.

Any binary output view stores only 8K of encrypted preview data in the cloud and continues to stream remaining data until the
downstream document Snap gets enough data to output 50 documents for its preview. ... 
To handle this case, the caching is enabled only for document Snaps.
